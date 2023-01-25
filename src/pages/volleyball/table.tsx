import React from 'react'
import Table from '../../components/constants/Table';
import MainLayout from '../../layouts/MainLayout'

const FootTableIndex = () => {
  return (
		<MainLayout>
			<div className='p-3 gap-y-3'>
				<div className='float-left font-bold text-lg px-3'>
					<h3>Standings</h3>
				</div>
				<Table teams={ [] } />
			</div>
		</MainLayout>
	);
}

export default FootTableIndex