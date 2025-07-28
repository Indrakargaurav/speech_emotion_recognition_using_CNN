import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  TextareaAutosize,
  IconButton,
  Chip,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  Send,
  CheckCircle,
} from "@mui/icons-material";
import "./ContactPage.css";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log("Form submitted:", formData);
    
    // Show success message
    setSnackbar({
      open: true,
      message: "Thank you for your message! I'll get back to you soon.",
      severity: "success",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Contact Information
  const contactInfo = {
    email: "gauravindrakar@gmail.com",
    phone: "+91 98765 43210", // Placeholder - update with actual number
    location: "Hyderabad, Telangana, India",
    availability: "Available for collaboration and opportunities",
    socialLinks: {
      linkedin: "https://linkedin.com/in/gaurav-indrakar",
      github: "https://github.com/Indrakargaurav",
      twitter: "https://twitter.com/gaurav_indrakar", // Placeholder
      instagram: "https://instagram.com/gaurav_indrakar" // Placeholder
    }
  };

  const socialLinks = [
    {
      icon: <GitHub />,
      name: "GitHub",
      url: contactInfo.socialLinks.github,
      color: "#333",
    },
    {
      icon: <LinkedIn />,
      name: "LinkedIn",
      url: contactInfo.socialLinks.linkedin,
      color: "#0077b5",
    },
    {
      icon: <Twitter />,
      name: "Twitter",
      url: contactInfo.socialLinks.twitter,
      color: "#1da1f2",
    },
  ];

  return (
    <div className="contact-container">
      {/* Navbar */}
      <AppBar position="sticky" sx={{ background: "linear-gradient(90deg, #ff7e5f, #feb47b)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 1rem" }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Speech Emotion Recognition
          </Typography>
          <Button color="inherit" onClick={() => handleNavigation("/home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("/contact")}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box className="contact-hero">
        <Container maxWidth="lg">
          <Typography variant="h2" className="contact-title">
            Get In Touch
          </Typography>
          <Typography variant="h5" className="contact-subtitle">
            Let's work together on your next project
          </Typography>
          <Typography variant="body1" className="contact-description">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </Typography>
        </Container>
      </Box>

      {/* Contact Content */}
      <Box className="contact-content">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} lg={8}>
              <Card className="contact-form-card">
                <CardContent>
                  <Typography variant="h4" className="form-title">
                    Send Me a Message
                  </Typography>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          className="submit-button"
                          endIcon={<Send />}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} lg={4}>
              <Box className="contact-info">
                <Typography variant="h4" className="info-title">
                  Contact Information
                </Typography>
                
                {/* Contact Details */}
                <Box className="contact-details">
                  <Card className="info-card">
                    <CardContent>
                      <Box className="info-item">
                        <IconButton className="info-icon">
                          <Email />
                        </IconButton>
                        <Box className="info-content">
                          <Typography variant="h6" className="info-label">
                            Email
                          </Typography>
                          <Typography 
                            variant="body2" 
                            className="info-value"
                            component="a"
                            href={`mailto:${contactInfo.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {contactInfo.email}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                  
                  <Card className="info-card">
                    <CardContent>
                      <Box className="info-item">
                        <IconButton className="info-icon">
                          <Phone />
                        </IconButton>
                        <Box className="info-content">
                          <Typography variant="h6" className="info-label">
                            Phone
                          </Typography>
                          <Typography 
                            variant="body2" 
                            className="info-value"
                            component="a"
                            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {contactInfo.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                  
                  <Card className="info-card">
                    <CardContent>
                      <Box className="info-item">
                        <IconButton className="info-icon">
                          <LocationOn />
                        </IconButton>
                        <Box className="info-content">
                          <Typography variant="h6" className="info-label">
                            Location
                          </Typography>
                          <Typography 
                            variant="body2" 
                            className="info-value"
                          >
                            {contactInfo.location}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>

                {/* Social Links */}
                <Box className="social-section">
                  <Typography variant="h5" className="social-title">
                    Follow Me
                  </Typography>
                  <Box className="social-links">
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        className="social-button"
                        onClick={() => window.open(social.url, "_blank")}
                        style={{ backgroundColor: social.color }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>

                {/* Availability */}
                <Card className="availability-card">
                  <CardContent>
                    <Box className="availability-header">
                      <CheckCircle className="availability-icon" />
                      <Typography variant="h6" className="availability-title">
                        Available for Opportunities
                      </Typography>
                    </Box>
                    <Typography variant="body2" className="availability-text">
                      {contactInfo.availability}
                    </Typography>
                    <Chip 
                      label="Open to Work" 
                      className="availability-chip"
                    />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box className="footer">
        <Container maxWidth="lg">
          <Typography variant="body2" className="footer-text">
            © 2025 Speech Emotion Recognition System. All Rights Reserved.
          </Typography>
          <Box className="footer-links">
            <Button
              variant="text"
              onClick={() => handleNavigation("/home")}
              className="footer-button"
            >
              Home
            </Button>
            <Button
              variant="text"
              onClick={() => handleNavigation("/about")}
              className="footer-button"
            >
              About
            </Button>
            <Button
              variant="text"
              onClick={() => handleNavigation("/contact")}
              className="footer-button"
            >
              Contact
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          className="snackbar-alert"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactPage; 