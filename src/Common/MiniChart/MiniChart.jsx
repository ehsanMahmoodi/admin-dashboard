import {LineChart, Line, Legend, ResponsiveContainer} from 'recharts';

const MiniChart = ({chartData}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={chartData} activeDot={false}>
                <Line type="natural" dataKey="pv" stroke="#FDAE65" strokeWidth={1} dot={false}/>
                <Line type="natural" dataKey="uv" stroke="#FD65EE" strokeWidth={2} dot={false}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default MiniChart