import { Box, Typography } from '@mui/material';
import './Home.css'

function Home() {
    const leftText = `Welcome to my portfolio! I am a software engineer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies. My goal is to build applications that not only meet user needs but also provide a delightful user experience. Feel free to explore my projects and get in touch if you have any questions or opportunities for collaboration. Thank you for visiting!`;
    const rightText = `I am currently a third year CS student at the University of California, Irvine. This summer I am interning at Veeva Systems as a Software Engineer Intern on the Vault Platform Pods Team focusing on platform code that will help in various deployment processes. I'm very grateful and happy to be working with such a talented team and learning so much.`;
    
    return (
        <Box>
            <Typography variant='h2' align='center' gutterBottom={true} sx={{
                background: 'linear-gradient(to right,rgb(86, 82, 197),rgb(21, 188, 210))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                marginTop: 3
            }}>
                A little about me {' '}
                <span style={{ 
                    background: 'none',
                    WebkitBackgroundClip: 'unset',
                    WebkitTextFillColor: 'initial',
                    fontSize: '1em', // match the font size of the text
                }}>
                    &#128563;
                </span>
            </Typography>
            <Box display="flex" justifyContent="center">
                <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                    <Typography sx={{ width: '100%', textAlign: 'center', paddingLeft: '4em'}}>{leftText}</Typography>
                </Box>

                <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                    <Box className="gradient-border-wrapper">
                    <img
                        className="homepage-image"
                        src={`${process.env.PUBLIC_URL}/homepage_image.png`}
                        alt="Myself holding a dog"
                    />
                    </Box>
                </Box>

                <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                    <Typography sx={{ width: '100%', textAlign: 'center', paddingRight: '4em'}}>{rightText}</Typography>
                </Box>
            </Box>
        </Box>
        
    );
}

export default Home;