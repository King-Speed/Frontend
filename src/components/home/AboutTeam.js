import { VerticalAlignTopOutlined } from '@ant-design/icons'
import { Button }  from 'antd'
import React from 'react'
import Team from '@/components/about/Team'
import NavigationHome from '@/components/home/NavigationHome'

const AboutTeam = ({ fullpageApi }) => {
    return (
        <>
            <NavigationHome />

            <div className="about-team">
                <Team />
            </div>
            
            <Button
                onClick={() => fullpageApi.moveTo(1, 0)}
                className="btn-back-top hidden-mobile"
                icon={<VerticalAlignTopOutlined className="ic-back-top" />}
            />
        </>
    )
}

export default AboutTeam
