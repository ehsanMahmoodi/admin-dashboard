import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const MediumLineChart = ({chartData}) => {
    return (<ResponsiveContainer width="95%" height="85%">
        <LineChart width={300} height={100} data={chartData} activeDot={false}>
            <XAxis dataKey="name" fill="red"/>
            <YAxis/>
            <Tooltip/>
            <Legend verticalAlign="top"/>
            <CartesianGrid strokeDasharray="2 1"/>
            <Line type="natural" dataKey="Revenue" stroke="#67E8F9" strokeWidth={3} dot={false}/>
            <Line type="natural" dataKey="Sales" stroke="#FD65EE" strokeWidth={3} dot={false}/>
        </LineChart>
    </ResponsiveContainer>)
}
export default MediumLineChart