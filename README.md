# SSS-Assignment
IT21192500 - H.M..B Kandepola
IT21268458 - A.V.R Dissanayaka

Steps to setup MERN platform

Step1: open file location using VS code
Step2: open the terminal slipt terrminal 2 sides
Step3: one side type this command cd client
Step4: other side type cd server
Step5: then run npm install in both sides
Step6: then run npm start on both side , in server location backend will start and in client location frontside start and rederect to localhost
Step7:ceate mongo db and connect it our program rdit .env file with your mongo db url
Step8:the go to postman or online api testing to get Post request send this request"http://localhost:5000/api/v1/singup" and go to body and type this exsactly like this
{
"role":"admin"
 "user":{
         "name":""
         "email":""
         "password":""
         "phone":""
         "address":""
    }
}
Step9:go to mongoDB and see weather data is add
Step10: create .env file and save it on server file location
  details that need to enter .env file 
      MONGO_URI = /* get this path from mongodb*/
      JWT_KEY = kjhfkjdhasfjkhdskjfhdskjhfkjh
      JWT_EXPIRES_IN = 1000000
Step10:then go to the site and login to admin now you can add doctors and patient

Training Dataset
Step 1: Install python libraries using pip install command. (opencv-python version 4.5.1.48, scikit-learn version 0.24.1, numpy version 1.20.1, pickle)
Step 2: Run initial_setup.py and input the email address that you have entered previously.
Step 3: Then camera will open and capture 100 images.
Step 3: Run test.py to check whether the face is recognized.
Step 4: Log in to the website using admin credentials provided. 
