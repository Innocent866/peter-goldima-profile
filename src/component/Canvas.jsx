import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../style/canvas.css";

const Canvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="none"
        onClick={handleShow}
        className="me-2 text-white border border-2"
      >
        <GiHamburgerMenu />
      </Button>
      <Offcanvas show={show} onHide={handleClose} className="bg-dark w-50">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div>
              <img src="#" alt="LOGO" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="canvas-ul">
            <Link to="/" className="canvas-link">Home</Link>
            <Link to="/about" className="canvas-link">About</Link>
            <Link to="/contact" className="canvas-link">Contact</Link>
          </div>
          <div className="text-center text-white mt-5 d-flex flex-column gap-1">
            <hr />
            <p>Mouth Throne Limited Homes & Properties</p>
            <p>Mouth Throne Foods</p>
            <hr />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Canvas;
