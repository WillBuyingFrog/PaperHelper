import {Box, Center, Flex, Grid, GridItem, Text} from "@chakra-ui/react";


function Header(){
    return(
        <Box h="80px" border='1px' borderColor='gray.200'>
            <Grid templateColumns="repeat(5, 1fr)" h="100%" gap={6}>
                <GridItem colSpan={1} h="100%">
                    <Flex height="100%" alignItems="center" ml="8%">
                        <Text fontSize="28px" fontWeight="700">青蛙文献助手</Text>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Header;