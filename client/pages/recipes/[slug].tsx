import Link from "next/link"

export default function RecipePage(props: any){
    return <div className="p-6">
        <h1 className="mb-6 text-xl font-bold">A Recipe Page</h1>
        <Link href="/" className='bg-blue-600 text-white p-2 rounded'>Back</Link>
    </div>
}