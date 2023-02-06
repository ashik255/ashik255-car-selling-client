import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import OrderPage from './OrderPage';

const OrderMap = () => {
    const [order, setOrder] = useState([]);
      const [isSpinnerTrue, setIsSpinnerTrue] = useState(false);

    useEffect(() => {
        setIsSpinnerTrue(true);
        fetch('https://car-selling-server-production.up.railway.app/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
        setIsSpinnerTrue(false);
    }, [])
    return (
        <Container>
        {!isSpinnerTrue ? <Row id='myorders' xs={1} md={2} className="g-4 m-3">

            {
                order.map(user => <OrderPage
                    key={user._id}
                    service={user}
                >
                </OrderPage>
                )
            }
        </Row>
            :
            <div className='text-center'>
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
            </div>
        }

    </Container>
    );
};

export default OrderMap;