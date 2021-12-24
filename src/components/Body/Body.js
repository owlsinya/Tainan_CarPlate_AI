import React, { Component } from 'react'
import './Body.css'


export default class Body extends Component {
	render() {
		return (
			<div>
				<table id="tblExport" border="1">
					<tbody>
						<tr><td>案號</td><td>1</td></tr>
						<tr><td>車號</td><td>200-EXW</td></tr>
						<tr><td>車種</td><td>1.摩托車</td></tr>
						<tr><td>日期時間</td><td>20201028084309</td></tr>
						<tr><td>違規地點</td><td>中山路</td></tr>
						<tr><td>違規事項</td><td>未戴安全帽</td></tr>
						<tr>
							<td id="picture" colspan="2" ><img src={require('./test.jpg')} /></td>
						</tr>
					</tbody>
				</table>

			</div>
		)
	}
}


// import React, { Component } from 'react'
// import Excel from '../Excel/Excel'

// export default class Body extends Component {
//     render() {
//         return (
//             <div>
//                 <table id="tblExport" border="1">
//                     <thead>
//                         <tr>
//                             <td>案號</td>
//                             <td>車號</td>
//                             <td>車種</td>
//                             <td>日期 時間</td>
//                             <td>違規事項</td>
//                             <td>違規地點</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>1</td>
//                             <td>aaa-123</td>
//                             <td>機</td>
//                             <td>20211207 13:50</td>
//                             <td>紅燈右轉</td>
//                             <td>中山路</td>
//                         </tr>
//                         <tr>
//                             <td>2</td>
//                             <td>aaa-111</td>
//                             <td>大</td>
//                             <td>20211207 13:55</td>
//                             <td>超速</td>
//                             <td>中山路</td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <hr></hr>
//                 <Excel />
//             </div>
//         )
//     }
// }
