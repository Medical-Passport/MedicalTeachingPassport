import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


class BarChart extends React.Component {
    state = {
        data: [{
          "Names": "John Smith - jsmith@gmail.com",
          "Coaching Capstone Experience": 50,
          "Coaching Capstone ExperienceColor": "hsl(299, 70%, 50%)",
          "Introduction to MedEd Scholarship": 161,
          "Introduction to MedEd ScholarshipColor": "hsl(299, 70%, 50%)",
          "Prepare and Present Teaching Topics": 161,
          "Prepare and Present Teaching TopicsColor": "hsl(299, 70%, 50%)",
          "Educational Service and Citizenship": 17,
          "Educational Service and CitizenshipColor": "hsl(152, 70%, 50%)",
          "UME, GME, or IPE": 91,
          "UME, GME, or IPEColor": "hsl(177, 70%, 50%)",
          "Faculty Development in Medical Education": 3,
          "Faculty Development in Medical EducationColor": "hsl(172, 70%, 50%)",
          "Active Medical Education Commitee Membership": 135,
          "Active Medical Education Commitee MembershipColor": "hsl(171, 70%, 50%)",
          "Opt-in and Biannual Review": 124,
          "Opt-in and Biannual ReviewColor": "hsl(290, 70%, 50%)"
        },
        {
          "Names": "Mike Smith - msmith@gmail.com",
          "Coaching Capstone Experience": 50,
          "Coaching Capstone ExperienceColor": "hsl(299, 70%, 50%)",
          "Introduction to MedEd Scholarship": 161,
          "Introduction to MedEd ScholarshipColor": "hsl(299, 70%, 50%)",
          "Prepare and Present Teaching Topics": 91,
          "Prepare and Present Teaching TopicsColor": "hsl(281, 70%, 50%)",
          "Educational Service and Citizenship": 145,
          "Educational Service and CitizenshipColor": "hsl(275, 70%, 50%)",
          "UME, GME, or IPE": 168,
          "UME, GME, or IPEColor": "hsl(40, 70%, 50%)",
          "Faculty Development in Medical Education": 153,
          "Faculty Development in Medical EducationColor": "hsl(304, 70%, 50%)",
          "Active Medical Education Commitee Membership": 126,
          "Active Medical Education Commitee MembershipColor": "hsl(174, 70%, 50%)",
          "Opt-in and Biannual Review": 189,
          "Opt-in and Biannual ReviewColor": "hsl(142, 70%, 50%)"
        },
        {
          "Names": "Ted Smith - tsmith@gmail.com",
          "Coaching Capstone Experience": 50,
          "Coaching Capstone ExperienceColor": "hsl(299, 70%, 50%)",
          "Introduction to MedEd Scholarship": 161,
          "Introduction to MedEd ScholarshipColor": "hsl(299, 70%, 50%)",
          "Prepare and Present Teaching Topics": 121,
          "Prepare and Present Teaching TopicsColor": "hsl(60, 70%, 50%)",
          "Educational Service and Citizenship": 112,
          "Educational Service and CitizenshipColor": "hsl(101, 70%, 50%)",
          "UME, GME, or IPE": 83,
          "UME, GME, or IPEColor": "hsl(1, 70%, 50%)",
          "Faculty Development in Medical Education": 34,
          "Faculty Development in Medical EducationColor": "hsl(142, 70%, 50%)",
          "Active Medical Education Commitee Membership": 123,
          "Active Medical Education Commitee MembershipColor": "hsl(74, 70%, 50%)",
          "Opt-in and Biannual Review": 80,
          "Opt-in and Biannual ReviewColor": "hsl(298, 70%, 50%)"
        },
        {
          "Names": "Sam Smith - ssmith@gmail.com",
          "Coaching Capstone Experience": 50,
          "Coaching Capstone ExperienceColor": "hsl(299, 70%, 50%)",
          "Introduction to MedEd Scholarship": 161,
          "Introduction to MedEd ScholarshipColor": "hsl(299, 70%, 50%)",
          "Prepare and Present Teaching Topics": 138,
          "Prepare and Present Teaching TopicsColor": "hsl(356, 70%, 50%)",
          "Educational Service and Citizenship": 51,
          "Educational Service and CitizenshipColor": "hsl(77, 70%, 50%)",
          "UME, GME, or IPE": 158,
          "UME, GME, or IPEColor": "hsl(359, 70%, 50%)",
          "Faculty Development in Medical Education": 161,
          "Faculty Development in Medical EducationColor": "hsl(176, 70%, 50%)",
          "Active Medical Education Commitee Membership": 55,
          "Active Medical Education Commitee MembershipColor": "hsl(81, 70%, 50%)",
          "Opt-in and Biannual Review": 81,
          "Opt-in and Biannual ReviewColor": "hsl(306, 70%, 50%)"
        },
        {
          "Names": "Luke Smith - lsmith@gmail.com",
          "Coaching Capstone Experience": 50,
          "Coaching Capstone ExperienceColor": "hsl(299, 70%, 50%)",
          "Introduction to MedEd Scholarship": 161,
          "Introduction to MedEd ScholarshipColor": "hsl(299, 70%, 50%)",
          "Prepare and Present Teaching Topics": 146,
          "Prepare and Present Teaching TopicsColor": "hsl(22, 70%, 50%)",
          "Educational Service and Citizenship": 36,
          "Educational Service and CitizenshipColor": "hsl(339, 70%, 50%)",
          "UME, GME, or IPE": 175,
          "UME, GME, or IPEColor": "hsl(282, 70%, 50%)",
          "Faculty Development in Medical Education": 106,
          "Faculty Development in Medical EducationColor": "hsl(163, 70%, 50%)",
          "Active Medical Education Commitee Membership": 185,
          "Active Medical Education Commitee MembershipColor": "hsl(105, 70%, 50%)",
          "Opt-in and Biannual Review": 12,
          "Opt-in and Biannual ReviewColor": "hsl(72, 70%, 50%)"
        },
        {
          "Names": "Xavier Smith - xsmith@gmail.com",
          "Coaching Capstone Experience": 50,
          "Coaching Capstone ExperienceColor": "hsl(299, 70%, 50%)",
          "Introduction to MedEd Scholarship": 161,
          "Introduction to MedEd ScholarshipColor": "hsl(299, 70%, 50%)",
          "Prepare and Present Teaching Topics": 115,
          "Prepare and Present Teaching TopicsColor": "hsl(323, 70%, 50%)",
          "Educational Service and Citizenship": 142,
          "Educational Service and CitizenshipColor": "hsl(232, 70%, 50%)",
          "UME, GME, or IPE": 168,
          "UME, GME, or IPEColor": "hsl(162, 70%, 50%)",
          "Faculty Development in Medical Education": 62,
          "Faculty Development in Medical EducationColor": "hsl(33, 70%, 50%)",
          "Active Medical Education Commitee Membership": 70,
          "Active Medical Education Commitee MembershipColor": "hsl(3, 70%, 50%)",
          "Opt-in and Biannual Review": 15,
          "Opt-in and Biannual ReviewColor": "hsl(84, 70%, 50%)"
        },
        {
          "Names": "Nate Smith - nsmith@gmail.com",
          "Coaching Capstone Experience": 50,
          "Coaching Capstone ExperienceColor": "hsl(299, 70%, 50%)",
          "Introduction to MedEd Scholarship": 161,
          "Introduction to MedEd ScholarshipColor": "hsl(299, 70%, 50%)",
          "Prepare and Present Teaching Topics": 11,
          "Prepare and Present Teaching TopicsColor": "hsl(164, 70%, 50%)",
          "Educational Service and Citizenship": 95,
          "Educational Service and CitizenshipColor": "hsl(38, 70%, 50%)",
          "UME, GME, or IPE": 115,
          "UME, GME, or IPEColor": "hsl(25, 70%, 50%)",
          "Faculty Development in Medical Education": 38,
          "Faculty Development in Medical EducationColor": "hsl(133, 70%, 50%)",
          "Active Medical Education Commitee Membership": 164,
          "Active Medical Education Commitee MembershipColor": "hsl(87, 70%, 50%)",
          "Opt-in and Biannual Review": 131,
          "Opt-in and Biannual ReviewColor": "hsl(51, 70%, 50%)"
        }
        ]
    }
  
    componentWillReceiveProps(props) {
        console.log('props',props)
    }

    render() {
        const {data} = this.state
    return (
        <div style={{height:600}}>

        <ResponsiveBar
         data={data}
         keys={[ 'Coaching Capstone Experience' , 'Introduction to MedEd Scholarship' , 'Prepare and Present Teaching Topics', 'Educational Service and Citizenship' , 'UME, GME, or IPE', 'Faculty Development in Medical Education', 'Active Medical Education Commitee Membership', 'Opt-in and Biannual Review' ]}
         indexBy="Names"
         margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
         padding={0.3}
         valueScale={{ type: 'linear' }}
         indexScale={{ type: 'band', round: true }}
         colors={{ scheme: 'nivo' }}
        defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'Active Medical Education Commitee Membership'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'UME, GME, or IPE'
              },
              id: 'lines'
          }
      ]}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Names',
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Percent complete',
          legendPosition: 'middle',
          legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
  />
  
  <Button variant="contained" color="Default">
  Email to fill out passport
</Button>
<Button variant="contained" color="Default">
  Email that component is overdue
</Button>

    </div>
    );
  }
}

export default BarChart;