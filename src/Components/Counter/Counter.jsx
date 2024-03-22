import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

function Counter() {
    const [num,setnum]=useState(1)
    return (
        <div className="flex">
            <div className="flex px-4 gap-2 py-2 bg-gray-300 rounded-xl">

                {num > 1 ? (
                    <button onClick={() => setnum(num - 1)} className='bg-white rounded-full mx-auto my-auto'>
                        <Minus />
                    </button>
                ) : (
                    <button className='bg-white rounded-full mx-auto my-auto' disabled>
                        <Minus />
                    </button>
                )}
                <p className='text-2xl'>{num}</p>
                <button className='bg-white rounded-full mx-auto my-auto' onClick={() => setnum(num + 1)}>
                    <Plus />
                </button>
            </div>

        </div>
    )
}

export default Counter