import react from 'react';
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            Hello {id}
        </div>
    )
}
export default Page