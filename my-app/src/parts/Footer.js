import React from "react";

import Button from "../elemens/Button";
import IconText from "./Icontexs";

export default function Footer() {
  return (
    <Footer>
      <div className='container'>
        <div className='row'>
          <div className='col-auto' style={{ width: 350 }}>
            <IconText />
            <p className='brand-tagline'>
              We kaboon your holiday instantly and memorable.
            </p>
          </div>
          <div className='col-auto mr-5'>
            <h6 className='mt-2'>For Beginner</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  New Account
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/properties'>
                  Start Booking a Room
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/use-payments'>
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-2 mr-5'>
            <h6 className='mt-2'>Exsplor us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/careers'>
                  Our Careers
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/privacy'>
                  Privacy
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/terms'>
                  Terms And Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className='col-2 mr-5'>
            <h6 className='mt-2'>Connect us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='mailto:support@staycation.id'>
                  Suport@Staycation.id
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='tel:+6282122081996'>
                  021-2208-1996
                </Button>
              </li>
              <li className='list-group-item'>
                <span>Staycation, Kemang, jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center copyrights'>
            Copyright2019-All raight reserved-Staycation
          </div>
        </div>
      </div>
    </Footer>
  );
}
