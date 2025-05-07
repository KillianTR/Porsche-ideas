import './style.css';
import Navbar from './components/Navbar';
import img1 from './assets/img-1.jpeg';
import img2 from './assets/img-2.jpeg';
import img3 from './assets/img-3.jpg';
import img4 from './assets/img-4.jpg';
import img5 from './assets/img-5.jpg';
import img6 from './assets/img-6.jpg';
import img7 from './assets/img-7.jpeg';
import img8 from './assets/img-8.jpeg';
import img9 from './assets/img-9.jpeg';
import { useEffect } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

function App() {
  useEffect(() => {
    const timeline = document.querySelector('.timeline');
    const scroller = document.querySelector('.scroller');
    const container = document.querySelector('.container');
    const timelineWidth = timeline.offsetWidth;
    const scrollerWidth = scroller.offsetWidth;
    const gap = parseInt(window.getComputedStyle(document.body).fontSize);
    const maxDragX = timelineWidth - scrollerWidth - 2 * gap;

    for (let i = 0; i < 50; i++) {
      const marker = document.createElement('div');
      marker.classList.add('marker');
      timeline.appendChild(marker);
    }

    Draggable.create(scroller, {
      type: 'x',
      bounds: {
        minX: gap,
        maxX: maxDragX,
      },
      onDrag: function () {
        let progress = (this.x - gap) / maxDragX;
        let containerX = -400 * (timelineWidth / 100) * progress;
        gsap.to(container, {
          x: containerX,
          duration: 1,
          ease: 'power3.out',
        });
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <section id="section-1">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident non tempora explicabo? Iure rem repellendus cumque, totam fuga ipsa.</p>
        </section>
        <section id="section-2">
          <div className="img-1"><img src={img1} alt="" /></div>
          <div className="img-2"><img src={img2} alt="" /></div>
          <div className="img-3"><img src={img3} alt="" /></div>
        </section>
        <section id="section-3">
          <div className="img-4"><img src={img4} alt="" /></div>
          <div className="img-5"><img src={img5} alt="" /></div>
          <div className="img-6"><img src={img6} alt="" /></div>
        </section>
        <section id="section-4">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quas.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident non tempora explicabo? Iure rem repellendus cumque, totam fuga ipsa.</p>
        </section>
        <section id="section-5">
          <div className="img-7"><img src={img7} alt="" /></div>
          <div className="img-8"><img src={img8} alt="" /></div>
          <div className="img-9"><img src={img9} alt="" /></div>
        </section>
      </div>

      <div className="timeline">
        <div className="scroller"><p>[<span>Drag</span>]</p></div>
      </div>
    </>
  );
}

export default App;
