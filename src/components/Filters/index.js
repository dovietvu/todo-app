import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
// import { filterTodoAction, filterTodoByStatusAction, filterByPriority } from '../../store/actions'
import filtersSlice from './filtersSlice';

const { Search } = Input;

export default function Filters() {
    const [keyword, setkeyword] = useState('')
    const [status, setStatus] = useState('All')
    const [priority, setPriority] = useState([])

    //gui du lieu di
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        const value = e.target.value
        setkeyword(value)
        dispatch(filtersSlice.actions.filterTodoAction(value))
    }

    const handleCheckStatus = (e) => {
        const value = e.target.value
        setStatus(value)
        dispatch(filtersSlice.actions.filterTodoByStatusAction(value))
    }

    const handlePriority = (e) => {
        setPriority(e)
        dispatch(filtersSlice.actions.filterByPriority(e))
    }
    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    value={keyword}
                    onChange={(e) => { handleSearch(e) }}
                    placeholder='input search text'
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group>
                    <Radio value='All' checked={status === 'All'} onClick={(e) => { handleCheckStatus(e) }}>All</Radio>
                    <Radio value='Completed' checked={status === 'Completed'} onClick={(e) => { handleCheckStatus(e) }}>Completed</Radio>
                    <Radio value='Todo' checked={status === 'Todo'} onClick={(e) => { handleCheckStatus(e) }}>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    value={priority}
                    onChange={(e) => { handlePriority(e) }}
                >
                    <Select.Option value='High' label='High'>
                        <Tag color='red'>High</Tag>
                    </Select.Option>
                    <Select.Option value='Medium' label='Medium'>
                        <Tag color='blue'>Medium</Tag>
                    </Select.Option>
                    <Select.Option value='Low' label='Low'>
                        <Tag color='gray'>Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}