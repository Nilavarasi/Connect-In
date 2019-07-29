# Use an official Python runtime as a parent image
FROM python:3.7
# Set the working directory to /frontend
WORKDIR /api

# Copy the current directory contents into the container at /frontend
COPY . /api


#MAINTAINER Olivier TASSEL <https://github.com/otassel>
 
# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

EXPOSE 5000

# Run app.py when the container launches
CMD ["python3", "app.py"]