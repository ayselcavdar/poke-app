import { Button } from 'react-bootstrap'

const BackToTopIcon = () => {

  const upToPage = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }
  return (
    <Button className="float-right mb-5" onClick={upToPage} color="primary" aria-label="edit" title="BackToButton">
      <i className="fas fa-chevron-circle-up"></i>
    </Button>
  );
};

export default BackToTopIcon;