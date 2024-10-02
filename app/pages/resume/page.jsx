import PdfViewer from '../../components/PdfViewer';

const Home = () => {
  return (
    <div>
      <h1>PDF Viewer</h1>
      <PdfViewer file="/file/JovinoMonterde-resume.pdf" />
    </div>
  );
};

export default Home;
