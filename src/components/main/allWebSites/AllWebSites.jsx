import React from 'react';
import { Table, Button, Popconfirm } from 'antd';



const AllWebSites = ({ user, firebaseService }) => {
    const { isLoading, sites, removeWebsite, email } = firebaseService

    const columns = [
        {
            title: 'Вебсайт',
            dataIndex: 'site',
            key: 'site',
        }, {
            title: 'Имя создателя',
            dataIndex: 'displayName',
            key: 'displayName',
        },]

    const text = 'Вы действительно хотите удалить сайт?'

    user && columns.push({
        title: 'Дейтсвие',
        dataIndex: '',
        key: 'x',
        render: (data) => (
            <Popconfirm
                placement="topLeft"
                title={text}
                onConfirm={() => removeWebsite(data.key)}
                disabled={email !== data.email}
                okText="Да" cancelText="Нет"
            >
                <Button type="primary" danger disabled={email !== data.email}>
                    Удалить
                </Button>
            </Popconfirm>),
    })


    const data = sites.map((el) => {
        return {
            key: el.uid,
            site: el.url,
            displayName: el.displayName,
            email: el.email
        }
    })


    return (
        <Table columns={columns} dataSource={data} loading={isLoading} />
    )
}

export default React.memo(AllWebSites);