import React from 'react';
import UseFirestore from '../hooks/UseFirestore';

const ImageGrid = () => {
	const { docs } = UseFirestore('images');
	console.log(docs);
	return (
		<div className="img-grid">
			{docs &&
				docs.map((doc) => {
					return (
						<div className="img-wrap" key={doc.id}>
							<img src={doc.url} alt="firebase pics" />
						</div>
					);
				})}
		</div>
	);
};

export default ImageGrid;