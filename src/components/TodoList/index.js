import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodoAction } from '../../store/actions.js'
import { todosRemainingSelector } from '../../store/selectors.js';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import todoListSlice from './todoListSlice';

export default function TodoList() {
    //update state
    const [value, setValue] = useState('')
    const [priority, setPriority] = useState('Medium')

    //lay state trong store
    const todoList = useSelector(todosRemainingSelector)

    //gui du lieu di
    const dispatch = useDispatch()
    const handleButtonAddTodo = () => {
        dispatch(
            todoListSlice.actions.addTodoAction({
                id: uuidv4(),
                name: value,
                completed: false,
                priority: priority
            })
        )
        setValue('')
        setPriority('Medium')
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {
                    todoList.map(item => (
                        <Todo
                            key={item.id}
                            name={item.name}
                            prioriry={item.priority}
                            completed={item.completed}
                            id={item.id}
                        />
                    ))
                }
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input
                        value={value}
                        onChange={(e) => { setValue(e.target.value) }}
                    />
                    <Select defaultValue="Medium" value={priority} onChange={(e) => { setPriority(e) }}>
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
                    <Button type='primary' onClick={handleButtonAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}