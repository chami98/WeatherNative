import React from "react";
import { Modal, Button, Input, FormControl, HStack, Center, NativeBaseProvider, TextArea } from "native-base";

function Contact() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    return <>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Contact </Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input ref={initialRef} />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Phone Number</FormControl.Label>
                        <Input keyboardType="numeric" />`
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Address</FormControl.Label>
                        <TextArea h={20} />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setModalVisible(false);
                        }}>
                            Cancel
                        </Button>
                        <Button onPress={() => {
                            setModalVisible(false);
                        }}>
                            Save
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
        <HStack space="4" justifyContent="center" alignItems="center">
            <Button onPress={() => {
                setModalVisible(!modalVisible);
            }}>
                Contact Chamikara
            </Button>
        </HStack>
    </>;
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Contact />
            </Center>
        </NativeBaseProvider>
    );
};