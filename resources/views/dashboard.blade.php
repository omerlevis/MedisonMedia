<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>
    <div class="card bg-light">
        <br>
        <div class="card-body">

        <table class="table table-bordered bg-white">
            <tr>
                <td>
                    <div class="card border border-white">
                        <div class="card-body">
                            You're logged in!
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="row no-gutters">

                        <div class="col-md-4">
                            <br>
                            @include('countries.country-card')
                        </div>

                        <div class="col-md-8">
                            <br>
                            <div id="countries-table"></div>
                            <script src="{{ asset('react_app/static/js/main.52c3ae62.js') }}"></script>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        </div>
    </div>

</x-app-layout>

