// Its just another option to characters.routes.ts

//   let novaConsulta = true;
//   let paginaAtual = 1;
//   const result = [];
//   try {
//     while (novaConsulta) {
//       console.log('testes');
//       const { data } = await api.get(
//         `character/?page=${paginaAtual}&species=Human`,
//       );
//       if (data.results.length <= 0) novaConsulta = false;
//       else {
//         paginaAtual += 1;
//         const filterData = data.results.filter(
//           item => item.location.name === 'Earth (C-137)',
//         );

//         filterData.map(item =>
//           result.push({
//             id: item.id,
//             name: item.name,
//             status: item.status,
//             gender: item.gender,
//             image: item.image,
//             episodes: item.episode,
//           }),
//         );
//       }
//     }
//   } catch {
//     novaConsulta = false;
//   }

//   return res.json(result);
