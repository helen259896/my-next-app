// import {Navbar} from '@/app/components/navbar';

type user = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

//server component fetch data
export default async function Users() {
  // await new Promise(resolve=> setTimeout(resolve, 3000))
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users =  await response.json();
  // console.log('Users page', users);
  return (
    <div>
      <div>This is Users Page</div>
      <div className="grid grid-cols-2 gap-2 p-4">
        {users.map((user: user) => {
            return (
              <div key={user.id} className='flex item-center justify-between p-4 by-white shadow rounded-lg'>
                <div className="flex flex-col space-y-1">
                  <div className='text-lg font-semibold'>{user.name}</div>
                  <div className='text-sm'>{user.username}</div>
                </div>
                <div className="flex flex-col space-y-1 items-end">
                  <div className='text-md'>{user.email}</div>
                  <div className='text-md'>{user.phone}</div>
                </div>
              </div>
          )
        })}
      </div>
    </div>
  )
}