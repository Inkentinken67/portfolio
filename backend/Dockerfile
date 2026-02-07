# Use the Python 3.11 image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy all files from backend/ (build context) into /app
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Set environment variable for Flask
ENV FLASK_ENV=development

# Expose Flask port
EXPOSE 8000

# Command to run the Flask app
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "8000"]
