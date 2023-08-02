const graph = [
    [0, 4, 2, 0, 0, 0],
    [4, 0, 1, 5, 0, 0],
    [2, 1, 0, 8, 10, 0],
    [0, 5, 8, 0, 2, 6],
    [0, 0, 10, 2, 0, 3],
    [0, 0, 0, 6, 3, 0]
  ];
  const INF = Infinity;
  
  function runDijkstra() {
    const numNodes = graph.length;
    const distances = new Array(numNodes).fill(INF);
    const visited = new Array(numNodes).fill(false);
    const path = new Array(numNodes);
  
    distances[0] = 0;
  
    for (let i = 0; i < numNodes - 1; i++) {
      const u = minDistance(distances, visited);
      visited[u] = true;
  
      for (let v = 0; v < numNodes; v++) {
        if (!visited[v] && graph[u][v] !== 0 && distances[u] + graph[u][v] < distances[v]) {
          distances[v] = distances[u] + graph[u][v];
          path[v] = u;
        }
      }
    }
  
    displayShortestPaths(distances, path);
  }
  
  function minDistance(distances, visited) {
    let min = INF;
    let minIndex = -1;
  
    for (let i = 0; i < distances.length; i++) {
      if (!visited[i] && distances[i] < min) {
        min = distances[i];
        minIndex = i;
      }
    }
  
    return minIndex;
  }
  
  function displayShortestPaths(distances, path) {
    const graphElement = document.querySelector('.graph');
    graphElement.innerHTML = '';
  
    for (let i = 0; i < distances.length; i++) {
      const node = document.createElement('div');
      node.className = 'node';
      node.innerText = distances[i] === INF ? '-' : distances[i];
      graphElement.appendChild(node);
    }
  }
  