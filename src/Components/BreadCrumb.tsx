import React from 'react'
import { Link } from 'react-router-dom'

interface BreadCrumbProps {
    crumb: string
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ crumb }) => (
    <div className="pt-5 pb-1 bg-white">
        <div className="container mx-auto">
            <div className="flex items-center mb-4">
                <Link
                    to="/"
                    className="flex items-center text-gray-500 hover:text-[#D88F70] transition-colors duration-400"
                >
                    <i className="fas fa-home mr-2" />
                    Home
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-[#D88F70]">{crumb}</span>
            </div>
        </div>
    </div>
)

export default BreadCrumb
