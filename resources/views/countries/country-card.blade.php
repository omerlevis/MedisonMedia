<div class="card">
                <div class="card-header">Add New Country</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('countries.store') }}">
                        @csrf
                        <div class="mb-4">
                            <x-label for="name" :value="__('Name')" />
                            <x-input id="name" class="block mt-1 w-full" type="text" name="name" required autofocus />
                            @error('name')
                            <div class="error-message">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-4">
                            <x-label for="iso" :value="__('ISO')" />
                            <x-input id="iso" class="block mt-1 w-full" type="text" name="iso" length="2" required />
                            @error('iso')
                            <div class="error-message">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="flex justify-end">
                            <x-button>
                                {{ __('Save') }}
                            </x-button>
                        </div>
                    </form>
                </div>
            </div>
