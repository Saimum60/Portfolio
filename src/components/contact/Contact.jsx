import React from 'react'

const Contact = () => {
  return (
   <section className='px-4 py-10'>
    <div className='container mx-auto flex justify-between items-center'>
        <div>
            <div>
                <input type="text" name='text' placeholder='Name' className='focus:outline-none' />
            </div>

        </div>
    </div>
   </section>
  )
}

export default Contact
