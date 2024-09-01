import 'bootstrap/dist/css/bootstrap.min.css';
import { useChat } from 'ai/react';
import Image from 'next/image';
import { useRef } from 'react';
import { InputGroup, Button, Form, Row, Col } from 'react-bootstrap';


const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api'
    });
    const chatContainer = useRef<HTMLDivElement>(null);

    const renderResponse = () => {
        return (
            <div className='response'>
                {messages.map((m, index) => (
                    <div key={m.id}>
                        {m.role !== 'user' && (
                            <Row  className='d-flex align-items-center' style={{ backgroundColor: '#FFF2F2', margin: '8px 0px', borderRadius: '8px'}}>
                                <Col className='col-auto'>
                                    <Image
                                    src="/ai.svg"
                                    alt="Submit button"
                                    width={24}
                                    height={24} 
                                    />
                                </Col>
                                <Col>
                                    <p className='message' style={{margin: '8px 0'}}>{m.content}</p>
                                </Col>
                            </Row>
                        )}
                        {m.role === 'user' && (
                            <Row className='d-flex align-items-center' style={{ backgroundColor: '#F6F5F2', margin: '8px 0px', borderRadius: '8px'}}>
                                <Col className='col-auto'>
                                    <Image
                                    src="/user.svg"
                                    alt="Submit button"
                                    width={24}
                                    height={24} 
                                    />
                                </Col>
                                <Col>
                                    <p className='message' style={{margin: '8px 0'}}>{m.content}</p>
                                </Col>
                            </Row>
                        )}
                        {index < messages.length-1 && <div className='horizontal-line' />}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div ref={chatContainer} className='chat'>
            {renderResponse()}
            <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-4">
                <Form.Control
                style={{backgroundColor: '#F6F5F2', borderColor: '#F3D0D7'}}
                placeholder="Hey! Ask me something!"
                aria-label="Hey! Ask me something!"
                aria-describedby="basic-addon2"
                onChange={handleInputChange} 
                value={input}
                />
                
                <Button type="submit" style={{backgroundColor: '#F6F5F2', borderColor: '#F3D0D7' }}>
                    <Image
                    src="/button.svg"
                    alt="Submit button"
                    width={24}
                    height={24}
                    />
                </Button>
            </InputGroup>
            </Form>

        </div>
    );
}

export default Chat;
