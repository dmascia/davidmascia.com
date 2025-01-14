"use client";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LetsConnect from "@/components/LetsConnect/";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import { grey } from "@mui/material/colors";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box mt={8}>
          <Typography variant="h2" component="h1">
            How to Create Your First Django App
          </Typography>
          <Grid container spacing={3} columns={12}>
            <Grid>
              <Box
                sx={{ display: "flex", gap: "15px", flexDirection: "column" }}
              >
                <Typography variant="body1" gutterBottom>
                  Django is a high-level Python web framework that allows you to
                  build robust, scalable, and secure web applications quickly.
                  Whether you’re a beginner or an experienced developer,
                  Django’s simplicity and elegance make it a popular choice. In
                  this post, we’ll guide you through creating a basic Django app
                  from scratch.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  In this blog post, i’ll walk you through the process of
                  creating a new Django application from scratch.
                </Typography>
                <Typography variant="h6" component="p">
                  Step 1: Prerequisites
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Before starting, ensure you have the following tools installed
                  on your system:
                  <br /> 1.Python Installed: Django requires Python 3.6 or
                  later. 2. Pip: Python’s package manager for installing
                  dependencies. 3. A terminal or command prompt. 4. Code Editor:
                  Use a code editor like{" "}
                  <Link href="https://code.visualstudio.com/">
                    Visual Studio Code
                  </Link>
                  .
                </Typography>
                <Typography variant="h6" component="p">
                  Step 2: Install Django
                </Typography>
                <Typography variant="body1" gutterBottom>
                  First, create a virtual environment to isolate your project
                  dependencies. Run:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        $ python -m venv myenv $ source myenv/bin/activate # On
                        Windows: myenv\Scripts\activate
                      </Typography>
                    </Box>
                  </Paper>
                  Next, install Django:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        $ pip install django
                      </Typography>
                    </Box>
                  </Paper>
                  You can confirm the installation by checking the version:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        $ django-admin --version
                      </Typography>
                    </Box>
                  </Paper>
                </Typography>

                <Typography variant="h6" component="p">
                  Step 3: Start a Django Project
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Create your project folder and navigate to it:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        $ mkdir my_django_project $ cd my_django_project
                      </Typography>
                    </Box>
                  </Paper>
                  Run the following command to start a new project:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        $ django-admin startproject myproject .
                      </Typography>
                    </Box>
                  </Paper>
                </Typography>
                <Typography variant="h6" component="p">
                  Step 4: Start an App
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Django projects are composed of apps. Create your first app:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        $ python manage.py startapp myapp
                      </Typography>
                    </Box>
                  </Paper>
                </Typography>
                <Typography variant="h6" component="p">
                  Step 5: Add Your App to the Project
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Register the app in settings.py under INSTALLED_APPS
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        INSTALLED_APPS = [ <br />
                        'django.contrib.admin', <br />
                        'django.contrib.auth', <br />
                        'django.contrib.contenttypes', <br />
                        'django.contrib.sessions', <br />
                        'django.contrib.messages',
                        <br />
                        'django.contrib.staticfiles', <br /> 'myapp', # Add your
                        app here <br />]
                      </Typography>
                    </Box>
                  </Paper>
                </Typography>
                <Typography variant="h6" component="p">
                  Step 6: Define a View
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Open myapp/views.py and define a simple view:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        from django.http import HttpResponse def home(request):
                        return HttpResponse("Welcome to my Django app!")
                      </Typography>
                    </Box>
                  </Paper>
                </Typography>
                <Typography variant="h6" component="p">
                  Step 7: Set Up a URL Route
                </Typography>
                <Typography variant="body1" gutterBottom>
                  In myproject/urls.py, include your app’s URL pattern:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        from django.contrib import admin <br />
                        from django.urls import path <br />
                        from myapp import views <br />
                        <br />
                        urlpatterns = [<br />
                        path('admin/', admin.site.urls), <br />
                        path('', views.home, name='home'), # Home page route
                        <br /> ]
                      </Typography>
                    </Box>
                  </Paper>
                </Typography>
                <Typography variant="h6" component="p">
                  Start the server to test your app:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  In myproject/urls.py, include your app’s URL pattern:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography
                        variant="body1"
                        sx={{ color: grey[50] }}
                        gutterBottom
                      >
                        $ python manage.py runserver
                      </Typography>
                    </Box>
                  </Paper>
                  Visit http://127.0.0.1:8000/ in your browser, and you should
                  see: “Welcome to my Django app!”
                </Typography>
                <Typography variant="h6" component="p">
                  Conclusion
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Congratulations! <br /> You’ve built your first Django app.
                  From here, you can:
                  <br /> • Add models to manage data. <br />• Build forms to
                  handle user input.
                  <br /> • Extend your app with Django’s built-in features like
                  authentication, admin dashboards, and more. <br />
                  <br />
                  Django’s modular design makes it an excellent choice for any
                  web application, from small blogs to complex enterprise
                  solutions.
                  <br />
                  <br />
                  <br />
                  Happy coding! 🚀
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box pt={4}>
            <LetsConnect />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
