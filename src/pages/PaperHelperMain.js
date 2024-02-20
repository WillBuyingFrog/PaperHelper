import Header from "../components/header";
import {Box} from "@chakra-ui/react";
import PdfViewer from "../components/PdfViewer";
const SamplePaper = process.env.PUBLIC_URL + '/sample-paper.pdf';

function PaperHelperMain(){
    return (
        <Box h="100vh" w="80vw" ml="10vw" mr="10vw">
            <Header />
            <PdfViewer pdfFile={SamplePaper} />
        </Box>

    );
}

export default PaperHelperMain;