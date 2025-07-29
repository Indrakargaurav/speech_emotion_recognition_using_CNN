import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AudioInput from "../components/AudioInput";
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
  CardMedia,
  Snackbar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import "../App.css";
import "./HomePage.css";
import EmotionChart from "../components/EmotionChart";
import axios from 'axios'
const HomePage = () => {
  const navigate = useNavigate();
  const [audioFile, setAudioFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // State to control the dialog
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [showChart, setShowChart] = useState(false);
  const [emotionData, setEmotionData] = useState(null);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioFile(file);
      setAudioUrl(url);
      setEmotionData(null); // Reset emotion data
      setShowChart(false); // Hide chart
      setSnackbarMessage("Audio file uploaded successfully!");
      setOpenSnackbar(true);
      setOpenDialog(true); // Open the modal when the file is uploaded
    }
  };
  
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const toggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      mediaRecorderRef.current.stop();
    } else {
      // Start recording
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        setAudioFile(audioBlob);
        setOpenDialog(true); // Open dialog to preview audio after stop
      };

      mediaRecorderRef.current.start();
    }
    setIsRecording((prev) => !prev);
  };

  const handleResultClick = async () => {
    if (!audioFile) {
      setSnackbarMessage("No audio file available for analysis!");
      setOpenSnackbar(true);
      return;
    }
  
    try {
      // Simulate the API request and emotion analysis
      const formData = new FormData();
      formData.append("file", audioFile);
  
      // Backend request to analyze the emotion
      const apiUrl = 'https://speech-emotion-recognition-using-cnn.onrender.com';
      const response = await axios.post(`${apiUrl}/api/analyze-emotion`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status !== 200) {
        throw new Error("Failed to fetch emotion analysis");
      }
  
      const data = response.data;
  
      if (data) {
        setEmotionData(data); // Update emotion data
        setShowChart(true); // Ensure chart shows after data is received
        setSnackbarMessage("Emotion analysis completed!");
        setOpenSnackbar(true);
        // Don't close the dialog here, it will show the result in the dialog
      } else {
        throw new Error("No emotion data returned");
      }
    } catch (error) {
      console.error("Error analyzing emotions:", error);
      setSnackbarMessage("Failed to analyze emotions. Please try again.");
      setOpenSnackbar(true);
    }
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the modal
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%"}}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ width: "100vw", background: "linear-gradient(90deg, #ff7e5f, #feb47b)", overflowY:"visible" }}>
        <Toolbar sx={{display: "flex", justifyContent: "space-between",padding: "0 1rem", }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" , marginleft: 0}}>
            Speech Emotion Recognition
          </Typography>
          <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
          <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Main Banner */}
      <Box sx={{ backgroundImage: "linear-gradient(135deg, #fdfcfb, #e2d1c3)", padding: 5, textAlign: "center" , maxHeight: "calc(100vh - 64px)", 
    marginTop: "700px",  padding: "7rem 5rem 35rem",
    boxSizing: "border-box"}}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold"}}>
          Understand Emotions in Speech
        </Typography>
        <Typography variant="h6" gutterBottom>
          Analyze audio to detect emotions with state-of-the-art AI.
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            component="label"
            sx={{
              background: "linear-gradient(90deg, #42e695, #3bb2b8)",
              color: "white",
              marginRight: 2,
              padding: "10px 20px",
              fontSize: "1rem",
            }}
          >
            Upload Audio
            <input type="file" accept="audio/*" hidden onChange={handleFileUpload} />
          </Button>
          <Button
            variant="contained"
            onClick={toggleRecording}
            sx={{
              background: isRecording ? "red" : "linear-gradient(90deg, #ff7e5f, #feb47b)",
              color: "white",
              padding: "10px 20px",
              fontSize: "1rem",
            }}
          >
            {isRecording ? "Stop Recording" : "Start Recording"}
          </Button>
        </Box>
      </Box>

      
  {/* Model Info Section */}
<Grid container spacing={4} justifyContent="center" sx={{ marginTop: 5 }}>
  <Grid item xs={12} sm={6} md={6} lg={6}> {/* Adjusted the width for larger screens */}
    <Card sx={{ textAlign: "center", padding: 3, height: "auto", maxHeight: "300px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.2rem" }}> {/* Slightly increased font size */}
          CNN Model for Emotion Recognition
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          Our model uses Convolutional Neural Networks (CNNs) to process and classify emotions in speech. 
          By analyzing Mel Frequency Cepstral Coefficients (MFCCs) and spectrograms, the CNN extracts key features 
          that help in identifying various emotions like happiness, sadness, anger, and more. 
          This approach ensures high accuracy and fast results for emotion detection from audio data.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>



      {/* Snackbar Notification */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Features Section */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ textAlign: "center", padding: 3, height: "200px" }}>
      <CardMedia
        component="img"
        sx={{ width: "80px", margin: "0 auto" }}
        image="\assests\speechanalysis.jpg"
        alt="Speech Analysis"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Speech Analysis
        </Typography>
        <Typography variant="body2">Analyze emotions from any audio input seamlessly.</Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ textAlign: "center", padding: 3, height: "200px" }}>
      <CardMedia
        component="img"
        sx={{ width: "80px", margin: "0 auto" }}
        image="\assests\emotion classification.avif"
        alt="Emotion Categories"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Emotion Categories
        </Typography>
        <Typography variant="body2">Detect various emotions like anger, joy, and sadness.</Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ textAlign: "center", padding: 3, height: "200px" }}>
      <CardMedia
        component="img"
        sx={{ width: "80px", margin: "0 auto" }}
        image="\assests\Accuracy_gauranteed.webp"
        alt="Accuracy Guaranteed"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Accuracy Guaranteed
        </Typography>
        <Typography variant="body2">
          Powered by state-of-the-art AI for reliable results.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>

      </Container>

      {/* Audio Input */}
      <Container sx={{ marginTop: 5 }}>
        <AudioInput
          isRecording={isRecording}
          setAudioUrl={setAudioUrl}  // Pass audio URL to update preview
          setSnackbarMessage={setSnackbarMessage}
          setOpenSnackbar={setOpenSnackbar}
        />
      </Container>

      {/* Dialog Modal for Audio Preview and Result */}
      <Dialog
  open={openDialog}
  onClose={handleCloseDialog}
  maxWidth="sm"
  fullWidth
  sx={{
    "& .MuiDialog-paper": {
      borderRadius: "15px",
      padding: "20px",
      width: "80%",
      maxWidth: "400px",
    },
  }}
>
  <DialogTitle>Audio Preview</DialogTitle>
  <DialogContent>
    <audio controls src={audioUrl} style={{ width: "100%" }} />
    <Box sx={{ marginTop: 2, textAlign: "center" }}>
      <Button
        variant="contained"
        onClick={handleResultClick}
        sx={{
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          color: "white",
          padding: "10px 20px",
          fontSize: "1rem",
        }}
      >
        Get Result
      </Button>
    </Box>
    {showChart && emotionData && <EmotionChart data={emotionData} />}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseDialog} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>

<Box sx={{ padding: 3, textAlign: 'center', borderTop: '1px solid #ddd', marginTop: 5 ,background:"#f9f9f9"}}>
  <Typography variant="body2" sx={{ color: '#555' }}>
    © 2025 YourCompanyName. All Rights Reserved.
  </Typography>
  <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', gap: 2 , background: '#f9f9f9'}}>
    <Button variant="text">Privacy Policy</Button>
    <Button variant="text">Contact Us</Button>
    <Button variant="text">Feedback</Button>
  </Box>
</Box>



    </div>
  );
};

export default HomePage;
