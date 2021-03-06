import React, { useContext } from 'react';
import { Steps, Button, Row, Col, Space } from 'antd';
import LeftArrow from '../common/LeftArrow/LeftArrow'
import { NavLink } from 'react-router-dom'
import { CONSTRUCTOR_PAGE } from "../../utils/consts";
import AllWebSites from "./allWebSites/AllWebSites";
import { observer } from 'mobx-react-lite'
import { Context } from '../../App'


const { Step } = Steps;


const Main = () => {

    const { store } = useContext(Context);
    const firebaseService = store.firebaseService;
    
    return (
        <>
            <Row>
                <h1>Здесь Вы можете собрать простенький сайт</h1>
            </Row>
            <Row justify="space-between" align="start">
                <Col md={{ span: 10 }} xs={{ span: 24 }}>
                    <Row>
                        <Space direction="vertical">
                            <Steps progressDot current={3} direction="vertical">
                                <Step title="Регистрация" description="Для создания сайта необходиво войти через свой google аккаунт." />
                                <Step title="Уникальный URL" description="Далее надо указать URL по которому будет доступен ваш сайт." />
                                <Step title="Сборка" description="И последним этапом является то, что надо собрать сайт и сохранить." />
                            </Steps>
                            <Space direction="vertical">
                                <div style={{ display: 'inline' }}>
                                    <NavLink to={CONSTRUCTOR_PAGE} >
                                        <Button type="primary" style={{ marginRight: 20 }}> Начать создание </Button>
                                    </NavLink>
                                    <LeftArrow />
                                </div>
                                <span style={{ display: 'inline-block' }}>  Нажми на кнопку сбоку, что бы начать создание сайта.</span>
                            </Space>
                        </Space>
                    </Row>
                </Col>
                <Col md={{ span: 13 }} xs={{ span: 24 }}>
                    <AllWebSites firebaseService={{ ...firebaseService }} />
                </Col>
            </Row>
        </>
    );
}

export default React.memo(observer(Main));