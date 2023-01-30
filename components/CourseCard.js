    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    import CommonList from './CommonList';
    
    export default function CourseCard({course}) {
        // const course={
        //     course_title:"MernStack Developement",
        //     images:[],
        //     course_name:"mern_stack_full_time",
        //     overview:"Full time course for Mern Stack developement. Internship includes realTime Projects after training.",
        //     key_features:[{name:"From MNC's developers", image:"https://mui.com/static/images/cards/contemplative-reptile.jpg", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}],
        //     description:"Full time course for Mern Stack developement. Not just a course its an Internship programme where you will be previledged to work on realTime Projects after training.",
        //     price:"55000",
        //     discount:"30000",
        //     selling_price:"25000",
        // }
      return (
        <Card sx={{ maxWidth: 345 }} className=" bg-white dark:bg-gray-600 text-gray-700 dark:text-red-50
        hover:scale-105 transition ease-in-out duration-1000  
        ">
          <div 
            // className='flex justify-space-between min-h-100 flex-col  '
          >
            <div>
              <div className='bg-blue-800 pt-5'>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className='text-white p-5' >
                    {course.course_title}
                    </span>
                  </Typography>        
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.images[0] || "https://mui.com/static/images/cards/contemplative-reptile.jpg"}
                    alt="green iguana"
                    className='p-0.5'
                  />
              </div>
              <CardContent  className=" p-5">
                <Typography variant="body2"
                //  color="text.secondary"
                // className="text-gray-600 dark:text-gray-200"
                >
                  <span className='text-gray-700 dark:text-gray-100' >
                    {course.overview}
                  </span>
                </Typography>
                <CommonList listArray={course.key_features} />
              </CardContent>
            </div>
          </div>
            <CardActions className=' bottom-0 w-full flex justify-end'>
              {/* <Button size="small" className='dark:bg-blue-700 dark:text-white hover:border-blue-700 hover:border-solid border-2'>Share</Button> */}
              <Button size="small" className='dark:bg-blue-700 dark:text-white hover:border-blue-700 hover:border-solid border-2'>Learn More</Button>
            </CardActions>
        </Card>
        );
    }
    