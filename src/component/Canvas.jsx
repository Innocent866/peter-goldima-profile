import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

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
      <Offcanvas show={show} onHide={handleClose} className="bg-dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div>
              <img src="#" alt="LOGO" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled d-flex flex-column gap-5">
            <li>
              <Link className="text-decoration-none text-white p-5 ">Home</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white p-5 ">
                About
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white p-5 ">
                Service
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-white p-5 ">
                Contact
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Canvas;
