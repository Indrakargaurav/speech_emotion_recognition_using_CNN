import React from "react";
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
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import {
  Psychology,
  Mic,
  Code,
  School,
  Work,
  GitHub,
  LinkedIn,
  Email,
  Group,
  Timeline,
  Architecture,
  PsychologyAlt,
  Speed,
  Security,
} from "@mui/icons-material";
import "./AboutPage.css";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Team Members - Update with actual team information
  const teamMembers = [
    {
      name: "Abhijeet Gowlikar",
      role: "Team Member",
      email: "abhijeet.gowlikar@example.com",
      github: "https://github.com/abhijeet-gowlikar",
      linkedin: "https://linkedin.com/in/abhijeet-gowlikar",
      avatar: "/path-to-avatar1.jpg",
      contributions: ["CNN Model Development", "Data Preprocessing", "Model Training"]
    },
    {
      name: "Akanksha Rondla", 
      role: "Team Member",
      email: "akanksha.rondla@example.com",
      github: "https://github.com/akanksha-rondla",
      linkedin: "https://linkedin.com/in/akanksha-rondla",
      avatar: "/path-to-avatar2.jpg",
      contributions: ["Frontend Development", "UI/UX Design", "User Interface"]
    },
    {
      name: "Gangula Venkata Raja Vineela",
      role: "Team Member",
      email: "vineela.gangula@example.com", 
      github: "https://github.com/vineela-gangula",
      linkedin: "https://linkedin.com/in/vineela-gangula",
      avatar: "/path-to-avatar3.jpg",
      contributions: ["Backend Development", "API Integration", "Database Design"]
    },
    {
      name: "Indrakar Gaurav",
      role: "Team Leader",
      email: "gaurav.indrakar@example.com",
      github: "https://github.com/gaurav-indrakar", 
      linkedin: "https://linkedin.com/in/gaurav-indrakar",
      avatar: "/path-to-avatar4.jpg",
      contributions: ["Team Leadership", "Full-Stack Development", "System Integration", "Deployment", "Project Coordination"]
    },
    {
      name: "Shaik Ayisha",
      role: "Team Member",
      email: "ayisha.shaik@example.com",
      github: "https://github.com/ayisha-shaik",
      linkedin: "https://linkedin.com/in/ayisha-shaik",
      avatar: "/path-to-avatar5.jpg",
      contributions: ["Machine Learning", "Audio Processing", "Feature Extraction"]
    },
    {
      name: "Udata Lekhana Surya Bhanu",
      role: "Team Member",
      email: "lekhana.udata@example.com",
      github: "https://github.com/lekhana-udata",
      linkedin: "https://linkedin.com/in/lekhana-udata",
      avatar: "/path-to-avatar6.jpg",
      contributions: ["Testing & Validation", "Documentation", "Project Management"]
    }
  ];

  const projectFeatures = [
    {
      icon: <Psychology />,
      title: "Emotion Recognition",
      description: "Advanced CNN-based model for detecting 8 different emotions from speech"
    },
    {
      icon: <Mic />,
      title: "Real-time Processing",
      description: "Live audio recording and instant emotion analysis"
    },
    {
      icon: <Speed />,
      title: "High Accuracy",
      description: "State-of-the-art model achieving high precision in emotion detection"
    },
    {
      icon: <Security />,
      title: "Secure & Private",
      description: "Local processing ensures user privacy and data security"
    }
  ];

  const technologies = [
    "React.js", "Node.js", "Python", "Flask", "MongoDB", 
    "PyTorch", "CNN", "Librosa", "Material-UI", "Express.js",
    "JWT Authentication", "Web Audio API", "Docker", "Vercel", "Render"
  ];

  const projectTimeline = [
    {
      phase: "Research & Planning",
      duration: "2 weeks",
      description: "Literature review, dataset selection, and project architecture design"
    },
    {
      phase: "Model Development", 
      duration: "4 weeks",
      description: "CNN model training, hyperparameter tuning, and validation"
    },
    {
      phase: "Backend Development",
      duration: "3 weeks", 
      description: "API development, database design, and authentication system"
    },
    {
      phase: "Frontend Development",
      duration: "3 weeks",
      description: "User interface design, audio processing, and real-time analysis"
    },
    {
      phase: "Integration & Testing",
      duration: "2 weeks",
      description: "System integration, testing, and performance optimization"
    }
  ];

  return (
    <div className="about-container">
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
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Typography variant="h2" className="hero-title">
            About Our Project
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            Speech Emotion Recognition using CNN
          </Typography>
          <Typography variant="body1" className="hero-description">
            A comprehensive full-stack application that leverages Convolutional Neural Networks (CNN) 
            to analyze and classify emotions from speech input. Our team from Neil Gogte Institute of Technology 
            has developed an innovative solution that combines cutting-edge machine learning with modern web technologies.
          </Typography>
          <Box className="hero-buttons">
            <Button
              variant="contained"
              className="primary-button"
              onClick={() => handleNavigation("/contact")}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              className="secondary-button"
              onClick={() => window.open("https://github.com/your-repo", "_blank")}
            >
              View on GitHub
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Project Overview */}
      <Box className="project-overview-section">
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title">
            Project Overview
          </Typography>
          <Grid container spacing={4}>
            {projectFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="feature-card">
                  <CardContent>
                    <Box className="feature-icon">
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" className="feature-title">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" className="feature-description">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Institution Section */}
      <Box className="institution-section">
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title">
            Institution & Mentor
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Card className="institution-card">
                <CardContent>
                  <Typography variant="h4" className="institution-name">
                    NEIL GOGTE INSTITUTE OF TECHNOLOGY
                  </Typography>
                  <Typography variant="body1" className="institution-location">
                    Kachavanisingaram Village, Hyderabad, Telangana 500058
                  </Typography>
                  <Typography variant="body1" className="institution-details">
                    Bachelor of Engineering in Computer Science & Engineering<br/>
                    III Year V Semester | Academic Year 2024-2025
                  </Typography>
                  <Box className="mentor-info">
                    <Typography variant="h6" className="mentor-title">
                      Project Mentor
                    </Typography>
                    <Typography variant="body1" className="mentor-name">
                      P V N Balarama Murthy
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box className="team-section">
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title">
            Meet Our Team
          </Typography>
          <Typography variant="body1" className="team-description">
            Our diverse team of six students worked collaboratively 
            to bring this innovative project to life under the guidance of our project mentor.
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="team-member-card">
                  <CardContent>
                    <Box className="member-avatar-container">
                      <Avatar
                        className="member-avatar"
                        alt={member.name}
                        src={member.avatar}
                      />
                    </Box>
                    <Typography variant="h6" className="member-name">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" className="member-role">
                      {member.role}
                    </Typography>
                    <Box className="member-contributions">
                      {member.contributions.map((contribution, idx) => (
                        <Chip
                          key={idx}
                          label={contribution}
                          size="small"
                          className="contribution-chip"
                        />
                      ))}
                    </Box>
                    <Box className="member-social">
                      <IconButton
                        size="small"
                        onClick={() => window.open(member.email, "_blank")}
                        className="social-icon"
                      >
                        <Email />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => window.open(member.github, "_blank")}
                        className="social-icon"
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => window.open(member.linkedin, "_blank")}
                        className="social-icon"
                      >
                        <LinkedIn />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technologies Section */}
      <Box className="technologies-section">
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title">
            Technologies Used
          </Typography>
          <Box className="technologies-container">
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                className="technology-chip"
                icon={<Code />}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Project Timeline */}
      <Box className="timeline-section">
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title">
            Development Timeline
          </Typography>
          <Grid container spacing={3}>
            {projectTimeline.map((phase, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card className="timeline-card">
                  <CardContent>
                    <Box className="timeline-header">
                      <Typography variant="h6" className="phase-title">
                        {phase.phase}
                      </Typography>
                      <Chip
                        label={phase.duration}
                        className="duration-chip"
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" className="phase-description">
                      {phase.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technical Architecture */}
      <Box className="architecture-section">
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title">
            Technical Architecture
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="architecture-card">
                <CardContent>
                  <Typography variant="h5" className="architecture-title">
                    Frontend (React.js)
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon><Code /></ListItemIcon>
                      <ListItemText primary="Modern React with Hooks" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Code /></ListItemIcon>
                      <ListItemText primary="Material-UI Components" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Code /></ListItemIcon>
                      <ListItemText primary="Real-time Audio Processing" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Code /></ListItemIcon>
                      <ListItemText primary="Responsive Design" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="architecture-card">
                <CardContent>
                  <Typography variant="h5" className="architecture-title">
                    Backend & ML (Python/Node.js)
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon><PsychologyAlt /></ListItemIcon>
                      <ListItemText primary="CNN Model with PyTorch" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Architecture /></ListItemIcon>
                      <ListItemText primary="Flask API for ML Inference" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Architecture /></ListItemIcon>
                      <ListItemText primary="Node.js Authentication Server" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Architecture /></ListItemIcon>
                      <ListItemText primary="MongoDB Database" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
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
    </div>
  );
};

export default AboutPage; 