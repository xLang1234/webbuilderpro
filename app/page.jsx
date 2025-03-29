"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeToggle } from './ThemeRegistry';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid, 
  Paper, 
  Avatar, 
  Chip,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useScrollTrigger,
  Zoom,
  Fab
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';
import { motion } from 'framer-motion';

// ScrollToTop component
function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.75;
        
        if (isInViewport) {
          el.classList.add('animate');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const navItems = ['Home', 'Services', 'Portfolio', 'Process', 'Testimonials', 'Contact'];
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        WebCraftPro
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText primary={item} sx={{ textAlign: 'center', py: 1 }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Sample project data
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with secure payment processing',
      image: '/api/placeholder/400/300',
      tech: ['Next.js', 'React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Corporate Website',
      description: 'Responsive corporate website with custom animations and content management',
      image: '/api/placeholder/400/300',
      tech: ['React', 'MUI', 'Framer Motion', 'Strapi CMS']
    },
    {
      title: 'Real Estate Application',
      description: 'Interactive property listing and search application with map integration',
      image: '/api/placeholder/400/300',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Maps API']
    },
  ];
  
  // Sample testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      comment: 'Working with this developer was a game-changer for our business. Our new website has increased conversions by 40%!',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      company: 'Innovative Solutions',
      comment: 'Exceptional work quality and attention to detail. The website exceeded our expectations in both design and functionality.',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Emma Roberts',
      company: 'GreenGrow Startup',
      comment: 'Not only is the website beautiful, but it loads incredibly fast and works perfectly on all devices. Highly recommended!',
      avatar: '/api/placeholder/60/60'
    },
  ];

  return (
    <>
      <Head>
        <title>WebCraftPro | Expert Website Developer</title>
        <meta name="description" content="Professional website development services using modern technologies like React, Next.js and Material UI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Navigation */}

{/* Navigation */}
<AppBar position="sticky" color="default" elevation={2}>
  <Container maxWidth="lg">
    <Toolbar disableGutters>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
      >
        <WebIcon sx={{ mr: 1 }} />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          WebCraftPro
        </motion.span>
      </Typography>
      
      {/* Add ThemeToggle button here */}
      <ThemeToggle />
      
      {isMobile ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <Box sx={{ display: 'flex' }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button color="inherit" sx={{ mx: 1 }}>
                {item}
              </Button>
            </motion.div>
          ))}
        </Box>
      )}
    </Toolbar>
  </Container>
</AppBar>
      
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 12,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Crafting Digital Experiences
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography variant="h5" component="p" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              I build fast, responsive, and beautiful websites that help businesses grow. 
              Using modern technologies for outstanding digital experiences.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                bgcolor: 'white', 
                color: '#764ba2',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
                mr: 2
              }}
            >
              View My Work
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.9)',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </Container>
      </Box>
      
      {/* Services Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }} className="scroll-animate">
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Services
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              End-to-end web development solutions to help your business thrive online
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {[
              { icon: <WebIcon fontSize="large" />, title: 'Web Design', description: 'Custom designs that align with your brand and engage your visitors.' },
              { icon: <CodeIcon fontSize="large" />, title: 'Web Development', description: 'High-performing websites built with modern technologies like React and Next.js.' },
              { icon: <DevicesIcon fontSize="large" />, title: 'Responsive Design', description: 'Websites that look and function perfectly on any device or screen size.' },
              { icon: <SpeedIcon fontSize="large" />, title: 'Performance Optimization', description: 'Fast-loading websites optimized for search engines and conversions.' }
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Paper 
                    elevation={2} 
                    sx={{ 
                      p: 3, 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6
                      }
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Portfolio Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }} className="scroll-animate">
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Featured Projects
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              A selection of my recent work showcasing my expertise and skills
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.tech.map((tech, idx) => (
                          <Chip key={idx} label={tech} size="small" />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="outlined" size="large">
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Development Process */}
      <Box sx={{ py: 8, bgcolor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }} className="scroll-animate">
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              My Development Process
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              A structured approach to creating exceptional websites
            </Typography>
          </Box>
          
          <Grid container spacing={4} alignItems="center">
            {[
              { step: 1, title: 'Discovery', description: 'Understanding your business goals, target audience, and requirements.' },
              { step: 2, title: 'Planning', description: 'Creating wireframes, sitemaps, and project roadmap.' },
              { step: 3, title: 'Design', description: 'Crafting beautiful UI designs that align with your brand identity.' },
              { step: 4, title: 'Development', description: 'Building your website using modern technologies and best practices.' },
              { step: 5, title: 'Testing', description: 'Rigorous quality assurance across devices and browsers.' },
              { step: 6, title: 'Launch', description: 'Deploying your website and providing training on content management.' }
            ].map((phase, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3
                  }}>
                    <Box sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      width: 60, 
                      height: 60, 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}>
                      {phase.step}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {phase.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {phase.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Testimonials */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }} className="scroll-animate">
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Client Testimonials
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              What my clients say about working with me
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
                      <Box>
                        <Typography variant="h6" component="h3">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1">
                      &quot;{testimonial.comment}&quot;
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Call to Action */}
      <Box sx={{ 
        py: 8, 
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Start Your Project?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Let&apos;s work together to bring your vision to life. Get in touch for a free consultation.
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                bgcolor: 'white', 
                color: '#764ba2',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                }
              }}
            >
              Contact Me
            </Button>
          </motion.div>
        </Container>
      </Box>
      
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <WebIcon sx={{ mr: 1 }} />
                WebCraftPro
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creating beautiful, functional websites that help businesses succeed online.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: hello@webcraftpro.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: (123) 456-7890
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: San Francisco, CA
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, my: 1 }}>
                {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                  <Button key={social} size="small">
                    {social}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} WebCraftPro. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
      
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .scroll-animate.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
