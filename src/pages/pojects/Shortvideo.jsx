/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import ProjectShortVideoCard from '../../components/ProjectShortVideoCard';
import Navbar from "../Navbar";
import Footer from "../Footer";
const Shortvideo = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  return (
    <div>
      <Navbar />
      <ProjectShortVideoCard />
      <Footer />
    </div>
  );
}

export default Shortvideo;
