
# **TempTracker: Current Temperature App**

## **Overview**

TempTracker is a simple Django-based web app that displays the current temperature for a specific city using the OpenWeatherMap API. It also provides the name of the city. The front-end is built with ReactJS, styled with TailwindCSS, and connects to the Django back-end to fetch real-time data.

---

## **Technologies Used**

- **Backend:** Django (Python 3.10.10)
- **Frontend:** ReactJS, TailwindCSS, Bootstrap
- **API:** OpenWeatherMap API
- **Environment Variables:** python-decouple
- **Development Tools:** Visual Studio Code, npm, Node.js

---

## **Features**

- Displays the current temperature for a specific city.
- Displays the name of the city where the temperature was fetched.
- Beautiful and responsive UI built with TailwindCSS.
- Real-time temperature data fetched from the OpenWeatherMap API.

---

## **Setup and Installation**

### **1. Clone the repository**
To get started, clone the repository to your local machine:
```bash
git clone https://github.com/shreyuu/TempTracker.git
cd TempTracker
```

### **2. Backend Setup (Django)**

#### a. **Create a Virtual Environment**
It is highly recommended to use a virtual environment for Python projects.

```bash
python3 -m venv weather_env
source weather_env/bin/activate  # On MacOS/Linux
weather_env\Scripts\activate     # On Windows
```

#### b. **Install Dependencies**
Install all required Python dependencies using pip:

```bash
pip install -r requirements.txt
```

#### c. **Create `.env` file**
In the root folder of your project, create a `.env` file and add your OpenWeatherMap API key:

```bash
YOUR_API_KEY= a1b2c3d4e5f6g7h8i9j0k  # Replace with your OpenWeatherMap API key
```

#### d. **Run Migrations**
Before starting the server, apply the initial migrations:

```bash
python manage.py migrate
```

#### e. **Start Django Development Server**
Run the Django development server to start the back-end:

```bash
python manage.py runserver
```

The server should be available at [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

### **3. Frontend Setup (React)**

#### a. **Install Node.js and npm**
If you haven't already, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

#### b. **Install Dependencies**
Navigate to the frontend directory (`frontend`) and install the required npm dependencies:

```bash
cd frontend
npm install
```

#### c. **Run React Development Server**
Run the React development server:

```bash
npm start
```

The React app will be available at [http://localhost:3000](http://localhost:3000).

---

## **App Flow**

1. **Frontend (React):**
   - Upon loading, the React app makes a request to the Django back-end API (`/api/temperature/`).
   - The request is handled by the Django view, which fetches the current temperature from the OpenWeatherMap API.
   - The back-end responds with a JSON object containing the temperature and city name.
   - The React app receives the response and displays the temperature and city on the screen.

2. **Backend (Django):**
   - The Django back-end is responsible for making a request to the OpenWeatherMap API to get the current temperature for a given city.
   - The API response is returned to the frontend in JSON format.

---

## **Endpoints**

- **GET /api/temperature/**: Fetches the current temperature and city name from the OpenWeatherMap API.
  - **Response:**
    ```json
    {
      "temperature": 24.18,
     "city": "Nashik"
     }
    ```

---

## **File Structure**

```
TempTracker/
│
├── weather_project/
│   ├── manage.py
│   ├── temperature/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── views.py       <-- Main view to get temperature
│   │   └── urls.py        <-- URL configuration for the temperature endpoint
│   └── weather_project/
│       ├── __init__.py
│       ├── settings.py     <-- Django settings
│       ├── urls.py         <-- Django URLs configuration
│       └── wsgi.py
│
├── frontend/               <-- ReactJS Frontend
│   ├── src/
│   │   ├── App.js          <-- Main component for rendering temperature
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json        <-- React dependencies
│   └── package-lock.json
│
├── .gitignore
├── LICENSE
├── README.md
└── requirements.txt        <-- Python dependencies
```

---

## **Troubleshooting**

- **CORS Issues**: If you encounter CORS issues between Django and React, you may need to install and configure `django-cors-headers`:
  
  ```bash
  pip install django-cors-headers
  ```
  Then add it to your `INSTALLED_APPS` and `MIDDLEWARE` in `settings.py` as follows:
  ```python
  INSTALLED_APPS = [
      ...,
      'corsheaders',
  ]
  MIDDLEWARE = [
      ...,
      'corsheaders.middleware.CorsMiddleware',
  ]
  ```
  
  Finally, allow all origins in `settings.py`:
  ```python
  CORS_ALLOW_ALL_ORIGINS = True
  ```

- **API Key**: Make sure your OpenWeatherMap API key is correctly added to the `.env` file. If you face issues, verify your API key is active by visiting [OpenWeatherMap](https://openweathermap.org/).

---

## **License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Future Enhancements**

- Add dynamic city selection via the frontend (e.g., a search input for the city).
- Integrate other weather information such as humidity, wind speed, and weather description.
- Improve error handling for the OpenWeatherMap API (e.g., invalid city names).