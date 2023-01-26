import React from 'react'
import BasketTable from '../../components/constants/BasketTable';
import Table from '../../components/constants/Table';
import { useApp } from '../../contexts/AppProvider';
import MainLayout from '../../layouts/MainLayout'

const FootTableIndex = () => {
  	const { teams } = useApp();
		return (
			<MainLayout>
				<div className='p-3 gap-y-3 flex flex-col'>
					<div className='float-left font-bold text-lg px-3'>
						<h3>Standings</h3>
					</div>
					<BasketTable teams={teams?.volleyball!} />
				</div>
			</MainLayout>
		);
}

export default FootTableIndex