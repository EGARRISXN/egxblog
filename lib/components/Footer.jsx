import SocialIcons from '@/lib/socialIcons'

export default function Footer() {
  return (
    <div className='mx-auto flex w-full max-w-3xl items-center justify-between border-t-2 p-4'>
      <div className='flex text-sm sm:text-base'>© 2024 EG.</div>
      <div className='flex gap-4'>
        <SocialIcons />
      </div>
    </div>
  )
}
