import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import MyTable from '../Tablelist/MyTable';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { serverUrl } from '../../auth/cfg';


function Search() {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [cars, setCars] = useState([]);
    const { register, handleSubmit } = useForm();


    /*******************************************************/
    /*
    const getRequest = useCallback(() => {
    
        const getData = async () => {
        
            let data={
                "EventDatetime0":start,
                "EventDatetime1":end,
                "Event":eventquery,
                "Checked":checkquery
                }
                console.log(data)
          const res = await fetch("http://192.168.191.10:9098/querybook/",{
              method: 'POST',
                body: JSON.stringify(data)
                })
          const results = await res.json();
          console.log('===results===')
          console.log(results)
          setCars(results);
        }
        getData();
      },[start,end,eventquery,checkquery]);
      */
    /*****************************************************/


    function handleTimeChange(date) {
        let dataValues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ];
        let tmp_str = dataValues[0] + '-' + dataValues[1] + '-' + dataValues[2] + 'T00:00:00'
        let str = tmp_str.toString()
        setStart(str)

    }

    function handleTimeChange2(date) {
        let dataValues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ];
        let tmp_str = dataValues[0] + '-' + dataValues[1] + '-' + dataValues[2] + 'T23:59:59'
        let str = tmp_str.toString()
        setEnd(str)
    }



    const onSubmit = (formData) => {
        let value = Object.keys(formData).map(key => {
            return formData[key]
        })
        let eventNo = parseInt(value[0])
        let checkNo = parseInt(value[1])


        const handlefetch = async () => {

            const Body = {
                "EventDatetime0": start,
                "EventDatetime1": end,
                "Event": eventNo,
                "Checked": checkNo
            }
            console.log(Body)
            query(Body)
            function query(Body) {
                // let str = "http://192.168.191.10:9098/querybook/"
                const str = serverUrl + "/querybook/";
                fetch(str, {
                    method: "POST",
                    body: JSON.stringify(Body)
                })
                    .then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => setCars(response));
            }
        }

        handlefetch()
    }
    console.log(cars)
    return (
        <>

            <table>
                <tr>

                    <td>
                        <h5>????????????:(?????????????????????)</h5>
                        <DatePicker
                            selected={startDate}
                            onSelect={(date) => handleTimeChange(date)}
                            onChange={(date) => setStartDate(date)}
                        ></DatePicker>
                    </td>
                    <td>
                        <h5>????????????:(?????????????????????)</h5>
                        <DatePicker
                            selected={endDate}
                            onSelect={(date) => handleTimeChange2(date)}
                            onChange={(date) => setEndDate(date)}
                        ></DatePicker>
                    </td>
                    <td>
                        <h5>????????????</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        
                            <select id="event" {...register('event')}>
                                <option value="0">ALL</option>
                                <option value="1">1.??????????????????????????????????????????</option>
                                <option value="2">2.????????????????????????????????????</option>
                                <option value="3">3.???????????????????????????????????????</option>
                                <option value="4">4.??????????????????????????????????????????</option>
                                <option value="5">5.?????????????????????????????????</option>
                                <option value="6">6.?????????????????????????????????</option>
                                <option value="7">7.???????????????????????????</option>
                                <option value="8">8.??????(??????)????????????</option>
                            </select>

                            <h4>????????????</h4>
                            <select id="checked" {...register('checked')}>
                                <option value="2">ALL</option>
                                <option value="0">1.?????????</option>
                                <option value="1">2.?????????</option>
                            </select>
                            <input type="submit" />

                        </form>
                    </td>
                </tr>
            </table>




            <MyTable tableData={cars} sizePerPage={10}></MyTable>
        </>
    );
}

export default Search
