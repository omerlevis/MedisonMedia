<div class="card">
                <div class="card-header">Countries List</div>

                <div class="card-body">
                    @if(empty($countries))
                    <p>No countries found.</p>
                    @else
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>ISO</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($countries as $country)
                        <tr>
                            <td>{{ $country->name }}</td>
                            <td>{{ $country->iso }}</td>
                            <td>
                                <a href="{{ route('countries.edit', $country) }}" class="btn btn-primary">Edit</a>
                                <form action="{{ route('countries.destroy', $country) }}" method="POST" style="display: inline-block;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger">Delete</button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                        </tbody>
                    </table>
                    @endif
                </div>
            </div>

