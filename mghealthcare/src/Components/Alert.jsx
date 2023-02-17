import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {
Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'

const  Alert =({head,message})=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button colorScheme='red' onClick={onOpen}>
          {head}
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent style={{width:"100%", height:"700px", backgroundColor:"whitesmoke",textAlign:"center",margin:"auto"}}>
              <AlertDialogHeader style={{marginTop:"100px",fontSize:"20px"}}  fontWeight='bold'>
               {message}
              </AlertDialogHeader>
  
              <div>
              <Button ref={cancelRef} style={{padding:"10px 10px",marginTop:"10px", borderRadius:"70%",border:"1px solid black"}}
                 onClick={onClose}>
                 <FontAwesomeIcon style={{fontSize:"22px"}} icon={faCircleXmark}/>
                </Button> 
              </div>
  
              <AlertDialogFooter style={{textAlign:"center",marginRight:"50px",marginTop:"30px"}}>
         
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export {Alert}