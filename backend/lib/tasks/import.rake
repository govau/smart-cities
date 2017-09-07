require 'data_importer'
require 'static_data_generator'

namespace :dash do
  namespace :data do 
    desc 'Import data from XLSX spreadsheet, populate DB and generate JSON'
    task :import, [:spreadsheet_path] => :environment do |task, args|
      importer = DataImporter.new args.spreadsheet_path
      importer.run

      generator = StaticDataGenerator.new 
      generator.run
    end
  end
end
