import React from 'react'
import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'


export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItems">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,789</span>
                <span className="featuredRate">
                    -1.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItems">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,759</span>
                <span className="featuredRate">
                    -11.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItems">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,589</span>
                <span className="featuredRate">
                    +2.4 <ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        </div>
  )
}
