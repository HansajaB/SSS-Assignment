from sklearn.neighbors import KNeighborsClassifier
import cv2
import pickle
import numpy as np
import os

# Initialize video capture and face detection
video = cv2.VideoCapture(0)
facedetect = cv2.CascadeClassifier('data/haarcascade_frontalface_default.xml')

# Load pre-trained data
with open('data/names.pkl', 'rb') as w:
    LABELS = pickle.load(w)
with open('data/faces_data.pkl', 'rb') as f:
    FACES = pickle.load(f)

# Train the KNN classifier
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(FACES, LABELS)

while True:
    ret, frame = video.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = facedetect.detectMultiScale(gray, 1.3, 5)
    
    for (x, y, w, h) in faces:
        crop_img = frame[y:y+h, x:x+w, :]
        resized_img = cv2.resize(crop_img, (50, 50)).flatten().reshape(1, -1)
        
        # Get distances and indices of the k-nearest neighbors
        distances, indices = knn.kneighbors(resized_img, n_neighbors=5)
        
        # Calculate the confidence level based on the distance to the nearest neighbor
        confidence_score = 1 / (1 + distances.mean())
        
        # Debugging print statements
        # print(f"Distances: {distances}")
        # print(f"Mean Distance: {distances.mean()}")
        # print(f"Confidence Score: {confidence_score}")
        
        # Show name if confidence is 80% or more, otherwise show "Unknown"
        if confidence_score >= 0.0003:
            predicted_class = knn.predict(resized_img)[0]
            label = str(predicted_class)
        else:
            label = "Unknown"
        
        detected_user = label
        # Display the label and rectangle around the face
        cv2.putText(frame, label, (x, y-15), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 255, 255), 1)
        cv2.rectangle(frame, (x, y), (x+w, y+h), (50, 50, 255), 1)
        
    if detected_user is not None:
        with open('detected_user.txt', 'w') as f:
            f.write(detected_user)
        break
    cv2.imshow("Frame", frame)
    k = cv2.waitKey(1)
    if k == ord('q'):
        break

video.release()
cv2.destroyAllWindows()
