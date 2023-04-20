import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField"
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

const JobInformaton = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className='flex flex-col w-full '>
      <div className='flex w-full gap-10 mt-10'>
        <div className='w-1/2 flex'>
          <FormControl fullWidth>
            <InputLabel className='min-w-fit'>Looking For <span className='text-[#FF0000]'>*</span></InputLabel>
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              value={age}
              label="Age"
              className="h-[48px]"
              onChange={handleChange}
              IconComponent={() => <div className='bg-[#dee2e6] w-16 rounded-md h-full p-3 flex justify-center items-center '> <ChevronDownIcon className='text-[#8c8c8c] font-[600]' /> </div>}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='w-1/2 flex '>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Experience <span className='text-[#FF0000]'>*</span></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              className="h-[48px]"
              IconComponent={() => <div className='bg-[#dee2e6] w-16 rounded-md h-full p-3 flex justify-center items-center '> <ChevronDownIcon className='text-[#8c8c8c] font-[600]' /> </div>}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='w-full mt-10'>
        <div className='w-1/2 pr-5'>
          <FormControl fullWidth>
            <InputLabel className='min-w-fit'>Education <span className='text-[#FF0000]'>*</span></InputLabel>
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              value={age}
              label="Age"
              className="h-[48px]"
              onChange={handleChange}
              IconComponent={() => <div className='bg-[#dee2e6] w-16 rounded-md h-full p-3 flex justify-center items-center '> <ChevronDownIcon className='text-[#8c8c8c] font-[600]' /> </div>}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='w-full mt-10'>
        <div className='w-full '>
          <FormControl fullWidth>
            <InputLabel className='min-w-fit'>Skills <span className='text-[#FF0000]'>*</span></InputLabel>
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              value={age}
              label="Age"
              className="h-[48px]"
              onChange={handleChange}
              IconComponent={() => <div className='bg-[#dee2e6] w-14 rounded-md h-full p-3 flex justify-center items-center '> <ChevronDownIcon className='text-[#8c8c8c] font-[600]' /> </div>}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='w-full mt-10'>
        <div className='w-full '>
          <FormControl fullWidth>

            <TextField
              required

              id="outlined-required"
              label="Description"
            // defaultValue="Write a description"
            />
          </FormControl>
        </div>
      </div>
      <div className='flex flex-col mt-10'>
        <p className='text-xs text-[#8C8C8C]'>
          Add If there is any inspiration
        </p>
        <button className='px-6 py-3 mt-2 bg-[#47CB5D] w-fit text-sm text-white rounded-md flex justify-center items-center gap-4'><ArrowUpTrayIcon className='h-4 w-4 ' />GO TO SELECT TEMPLATE
        </button>

      </div>
    </div>
  )
}


export default JobInformaton