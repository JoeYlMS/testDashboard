import { Title } from '../../components';
import './style.scss';
export const BlokContent = () => {
  return (
    <div className='blok-contain'>
      <Title text='Hello Evano 👋🏼,' />

      <div>
        <div>
          <div>
            <h3>All Customers</h3>
            <span>Active Members</span>
          </div>
          <input type='text' />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th scope='col'>Customer Name</th>
                <th scope='col'>Company</th>
                <th scope='col'>Phone Number</th>
                <th scope='col'>Email</th>
                <th scope='col'>Country</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Cooper</td>
                <td>Microsoft</td>
                <td>(225) 555-0118</td>
                <td>jane@microsoft.com</td>
                <td>United States</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>Showing data 1 to 8 of 256K entries</p>
            <div>
              <span>{'<'}</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>...</span>
              <span>40</span>
              <span>{'>'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
